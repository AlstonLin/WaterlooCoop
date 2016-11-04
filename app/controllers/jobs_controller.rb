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
    model = Job.preload(:company, :reviews).find(params[:id])
    @job = model.as_json
    @job[:company] = model.company.as_json
    @job[:reviews] = []
    model.reviews.each do |review|
      @job[:reviews] << review.as_json
    end
    respond_to do |format|
      format.html
      format.json { render :json => @job }
    end
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
