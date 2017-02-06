class DataController < ApplicationController
  def index


    @allworkouts = Workout.where(user_id: current_user.id)
    @exercises = []
    @allworkouts.each do |workout|
      @exercises << Exercise.where(id: workout.exercise_id).first
    end
    @exercises.uniq! {|exercise| exercise[:id]}


    if !params["/data"].nil?
    dropdown = params["/data"]["exercise_id"]
    @workouts = Workout.where(user_id: current_user.id)
    @exercise = Exercise.where(id: dropdown)
    @workouts = @workouts.select {|workout| workout["exercise_id"] == @exercise.first.id }
    
    @data = []
    @workouts.each do |workout|
      @data << [workout.date, workout.weight]
    end
  end

    respond_to do |format|
      format.html
      format.json {  }
    end
  end

  private

  def exercise_params
    params.require(:data).permit(
      :exercise_id
    )
  end
end
