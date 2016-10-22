class ReviewsController < ApplicationController
  def new
  end
  
  def create
    @review = Review.new(review_params)
    @review.author = current_user
    if @review.save
      render :json => @review
    else
      render :json => {
        error: @review.errors.full_messages.join(',')
      }, :status => 500
    end
  end

  private
  def review_params
    params.require(:review).permit(:job_id, :difficulty, :rating, :term, :salary, :content, :year) 
  end
end
