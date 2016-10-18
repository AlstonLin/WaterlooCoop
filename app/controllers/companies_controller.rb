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

  def autocomplete
    results = Company.search(params[:query], :limit => 10)
    results = results.map do |company|
      {
        name: company.name,
        id: company.id
      }
    end
    render :json => results
  end

  private
    def company_params
      params.require(:company).permit(:name, :description, :url, :location)
    end
end
