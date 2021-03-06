class Api::V1::WorkoutsController < ApplicationController
skip_before_action :verify_authenticity_token

  def index
    @workouts = Workout.where(user_id: current_user.id).order(date: :desc)
    @workouts = @workouts.group_by{ |workout| workout.date.to_date}
    @formauth = form_authenticity_token
    @exercises = Exercise.where(approved: true)
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
    else
      flash[:notice] = @workout.errors.full_messages.to_sentence
      render :index
    end
  end

  def destroy
    @workout = Workout.find(params[:id])
    @workout.destroy
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
