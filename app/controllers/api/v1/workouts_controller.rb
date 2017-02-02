class Api::V1::WorkoutsController < ApplicationController

  def index
    @workouts = Workout.where(user_id: current_user.id).order(date: :desc)
    @exercises = Exercise.all
    render json: {exercises: @exercises, workouts: @workouts}
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
end
