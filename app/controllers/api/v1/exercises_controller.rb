class Api::V1::ExercisesController < ApplicationController


  def index
    @shoulders = Exercise.where(category: "Shoulders", approved: true)
    @legs = Exercise.where(category: "Legs", approved: true)
    @back = Exercise.where(category: "Back", approved: true)
    @abs = Exercise.where(category: "Abs", approved: true)
    @triceps = Exercise.where(category: "Triceps", approved: true)
    @biceps = Exercise.where(category: "Biceps", approved: true)
    @chest = Exercise.where(category: "Chest", approved: true)

    render json: {shoulders: @shoulders, legs: @legs, back: @back, abs: @abs, triceps: @triceps, biceps: @biceps, chest: @chest}
  end
end
