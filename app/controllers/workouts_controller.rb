class WorkoutsController < ApplicationController

  def index
    @workouts = Workout.where(user_id: current_user.id).order(date: :desc)
  end

  def new
    @workout = Workout.new
    @exercises = Exercise.all
  end

  def create
    @workout = Workout.new(workout_params)
    @workout.user_id = current_user.id
    if @workout.save
      flash[:notice] = ("workout added successfully.")
      redirect_to workouts_path
    else
      flash[:notice] = @workout.errors.full_messages.to_sentence
      render :new
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
