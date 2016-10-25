class JobsController < ApplicationController
  def index
    # NOTE: A bit inefficient since this is now 2 queries, but it doesn't look like identity_cache has to option to do find all
    # NOTE: Using cache saves a very small amount of load time with a small dataset.
    # This should be tested with a larger dataset to see if this is worth it
    @models = Job.fetch_multi(Job.pluck(:id))
    @jobs = []
    @models.each do |job|
      json = job.as_json
      json[:company] = job.fetch_company.as_json
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
