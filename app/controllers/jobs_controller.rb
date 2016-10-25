class JobsController < ApplicationController
  def index
    @jobs = []
    Job.preload(:company).all.each do |job|
      json = job.as_json
      json[:company] = job.company.as_json
      @jobs << json
    end
  end

  def show
    @job = Job.find(params[:id])
    render :json => @job
  end

  def create
    @job = Job.create(job_params)
    if @job.id == nil # Error
      render :json => {
        error: @job.errors.full_messages.join(',') 
      }, :status => 500
    else
      render :json => @job
    end
  end

  private
    def job_params
      params.require(:job).permit(:title, :industry, :company_id)
    end
end
