class WorkoutsController < ApplicationController

  def index
    @workouts = Workout.where(user_id: current_user.id).order(date: :desc)
    @exercises = Exercise.all

      respond_to do |format|
        format.html
        format.json {  }
      end
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

  def destroy
    @workout = Workout.find(params[:id])
    @workout.destroy

    redirect_to workouts_path
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
