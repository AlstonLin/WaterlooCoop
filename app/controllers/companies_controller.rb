class CompaniesController < ApplicationController
  def show
    @company = Company.find(params[:id])
  end

  def create
    @company = Company.create(company_params)
    if @company.id == nil # Error
      render :json => {
        error: @company.errors.full_messages.join(',') 
      }, :status => 500
    else
      render :json => @company
    end
  end
  
  def jobs
    @company = Company.find(params[:company_id])
    @jobs = Job.search(params[:query], :limit =>10, :fields => [:title],
                       :where => { :company_id => @company.id })
    render :json => @jobs
  end

  def autocomplete
    results = Company.search(params[:query], :limit => 10, :fields => [:name])
    render :json => results
  end

  private
    def company_params
      params.require(:company).permit(:name, :description, :url, :location)
    end
end
