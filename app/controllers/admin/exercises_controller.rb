class Admin::ExercisesController < ApplicationController
  before_action :check_if_admin

  def index
    @exercises = Exercise.where(approved: false)
  end

  def edit
    @exercise = Exercise.where(id: params[:id]).first
  end

  def update
    @exercise = Exercise.where(id: params[:id])
    if params[:commit].nil?
      binding.pry
      @exercise.update(approved: true)
      redirect_to admin_exercises_path
    else
      binding.pry
      if @exercise.update(exercise_params)
        redirect_to admin_exercises_path
        flash[:notice] = "Exercise updated"
      else
        flash[:alert] = @exercise.errors.full_messages.to_sentence
        render :edit
      end
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

  protected

  def check_if_admin
    unless current_user.admin?
      redirect_to root_path
      flash[:alert] = "You are not authorized to view that page"
    end
  end
end
