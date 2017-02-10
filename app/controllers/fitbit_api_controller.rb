class FitbitApiController < ApplicationController

  before_filter :authenticate_user!

  def data_request
    today =
    client = current_user.fitbit_client

      output = client.activity_time_series(resource: 'steps', start_date: Date.today-1, period: '1w')

    render json: output
  end
end
