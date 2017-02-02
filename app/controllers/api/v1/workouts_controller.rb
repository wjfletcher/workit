class Api::V1::WorkoutsController < ApplicationController

  def index
    @workouts = Workout.where(user_id: current_user.id).order(date: :desc)
    @exercises = Exercise.all
    @user = User.where(user_id: current_user.id)
    render json: {exercises: @exercises, workouts: @workouts}
  end
end
