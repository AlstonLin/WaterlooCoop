class JobsController < ApplicationController
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
