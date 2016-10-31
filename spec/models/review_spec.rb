require 'rails_helper'

describe Review do
  # Success Tests
  it "is valid with a job, author, rating, difficulty, salary, content, term, and year" do
    company = Company.create(
      :name => "Name",
      :description => "Description",
      :location => "Waterloo, Ontario"
    )
    job = Job.create(
      :title => "Title",
      :industry => "SOME INDUSTRY",
      :company => company
    )
    user = User.create(
      :email => "test@test.com",
      :password => "password"
    )
    review = Review.new(
      :job => job,
      :author => user,
      :difficulty => 4,
      :rating => 3,
      :salary => 1000,
      :content => "Content",
      :year => 2016,
      :term => "1A"
    );
    expect(review).to be_valid
  end
  # Validation Tests
  it "is not valid without a job or author" do
    review = Review.new(
      :job => nil,
      :author => nil,
      :difficulty => 4,
      :rating => 3,
      :salary => 1000,
      :content => "Content",
      :year => 2016,
      :term => "1A"
    );
    review.valid?
    expect(review.errors[:job]).to include("can't be blank")
    expect(review.errors[:author]).to include("can't be blank")
  end
  it "is not valid with an invalid term" do
    company = Company.create(
      :name => "Name",
      :description => "Description",
      :location => "Waterloo, Ontario"
    )
    job = Job.create(
      :title => "Title",
      :industry => "SOME INDUSTRY",
      :company => company
    )
    user = User.create(
      :email => "test@test.com",
      :password => "password"
    )
    review = Review.new(
      :job => job,
      :author => user,
      :difficulty => 4,
      :rating => 3,
      :salary => 1000,
      :content => "Content",
      :year => 2016,
      :term => "INVALID"
    );
    review.valid?
    expect(review.errors[:term]).to include("is not included in the list")
  end
  it "is not valid with missing fields" do
    company = Company.create(
      :name => "Name",
      :description => "Description",
      :location => "Waterloo, Ontario"
    )
    job = Job.create(
      :title => "Title",
      :industry => "SOME INDUSTRY",
      :company => company
    )
    user = User.create(
      :email => "test@test.com",
      :password => "password"
    )
    review = Review.new(
      :job => job,
      :author => user,
      :difficulty => nil,
      :rating => nil,
      :salary => nil,
      :content => nil,
      :year => nil,
      :term => "2A"
    );
    review.valid?
    expect(review.errors[:difficulty]).to include("can't be blank")
    expect(review.errors[:rating]).to include("can't be blank")
    expect(review.errors[:salary]).to include("can't be blank")
    expect(review.errors[:content]).to include("can't be blank")
    expect(review.errors[:year]).to include("can't be blank")
  end
  # Instance Methods
  # Class Methods
end
