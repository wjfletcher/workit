class FitbitApiController < ApplicationController

  before_filter :authenticate_user!

  def data_request
    client = current_user.fitbit_client

      output = client.activity_time_series(resource: 'steps', start_date: "2017-02-07", period: '1d')

    render json: output
  end
end
