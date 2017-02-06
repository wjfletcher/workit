class Api::V1::WorkoutsController < ApplicationController
  def index
    case params[:resource]
    when 'daily_activity_summary'
      output = client.activity_time_series(resource: 'calories', start_date: params[:date], period: '1d')
    when 'sleep'
      output = client.sleep_logs(params[:date])
    when 'activities/steps'; output = client.activity_time_series(resource: 'steps', start_date: params[:date], period: '1d')
    when 'weight'; output = client.weight_logs(start_date: params[:date])
    end
    render json: output
  end
end
