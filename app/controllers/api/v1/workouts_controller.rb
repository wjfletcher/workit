class Api::V1::WorkoutsController < ApplicationController


  def index
    @workouts = Workout.where(user_id: current_user.id).order(date: :desc)
    @formauth = form_authenticity_token
    @exercises = Exercise.all
    render json: {exercises: @exercises, workouts: @workouts, formauth: @formauth}
  end

  def new
    @workout = Workout.new
  end

  def create
    @workout = Workout.new(workout_params)
    @workout.user_id = current_user.id
    if @workout.save
      flash[:notice] = ("workout added successfully.")
      redirect_to workouts_path
    else
      flash[:notice] = @workout.errors.full_messages.to_sentence
      render :index
    end
  end

  private

  def workout_params
    params.require(:workout).permit(
      :exercise_id,
      :date,
      :reps,
      :sets,
      :weight
    )
  end
end
