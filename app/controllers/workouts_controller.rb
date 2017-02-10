class WorkoutsController < ApplicationController

  def index
    @workouts = Workout.where(user_id: current_user.id).order(date: :desc)
    @workouts = @workouts.group_by{ |workout| workout.date.to_date}
    @exercises = Exercise.where(approved: true)

      respond_to do |format|
        format.html
        format.json {  }
      end
  end

  def new
    @workout = Workout.new
    @exercises = Exercise.where(approved: true)
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

  def edit
    @workout = Workout.where(id: params[:id]).first
  end

  def update
      @workout = Workout.where(id: params[:id])
    if @workout.update(workout_params)
      redirect_to workouts_path
      flash[:notice] = "Workout updated"
    else
      flash[:alert] = @exercise.errors.full_messages.to_sentence
      render :edit
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
