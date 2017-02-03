class ExercisesController < ApplicationController
  def index
    @exercises = Exercise.all
  end

  def new
    @exercise = Exercise.new
  end

  def create
    @exercise = Exercise.new(exercise_params)
    if @exercise.save
      flash[:notice] = ("exercise added successfully.")
      redirect_to exercises_path
    else
      flash[:notice] = @exercise.errors.full_messages.to_sentence
      render :new
    end
  end

  private

  def exercise_params
    params.require(:exercise).permit(
      :name,
      :description,
      :category
    )
  end
end
