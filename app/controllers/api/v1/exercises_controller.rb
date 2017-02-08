class Api::V1::ExercisesController < ApplicationController


  def index
    @shoulders = Exercise.where(category: "Shoulders")
    @legs = Exercise.where(category: "Legs")
    @back = Exercise.where(category: "Back")
    @abs = Exercise.where(category: "Abs")
    @triceps = Exercise.where(category: "Triceps")
    @biceps = Exercise.where(category: "Biceps")
    @chest = Exercise.where(category: "Chest")

    render json: {shoulders: @shoulders, legs: @legs, back: @back, abs: @abs, triceps: @triceps, biceps: @biceps, chest: @chest}
  end
end
