class DataController < ApplicationController
  def index

    @workouts = Workout.where(user_id: current_user.id)


    respond_to do |format|
      format.html
      format.json {  }
    end
  end
end
