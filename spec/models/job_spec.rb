require 'rails_helper'

describe Job do
  # Success Tests
  it "is valid with a company, title, industry" do
    company = Company.create(
      :name => "Name",
      :description => "Description",
      :location => "Waterloo, Ontario"
    )
    job = Job.new(
      :title => "Title",
      :industry => "SOME INDUSTRY",
      :company => company
    )
    expect(job).to be_valid
  end
  # Validation Tests
  it "is not valid without a company" do
    job = Job.new(
      :title => "Title",
      :industry => "SOME INDUSTRY",
      :company => nil
    )
    job.valid?
    expect(job.errors[:company]).to include("can't be blank")
  end
  it "is not valid without a industry" do
    company = Company.create(
      :name => "Name",
      :description => "Description",
      :location => "Waterloo, Ontario"
    )
    job = Job.new(
      :title => "Title",
      :industry => nil,
      :company => company
    )
    job.valid?
    expect(job.errors[:industry]).to include("can't be blank")
  end
  it "is not valid without a title" do
    company = Company.create(
      :name => "Name",
      :description => "Description",
      :location => "Waterloo, Ontario"
    )
    job = Job.new(
      :title => nil,
      :industry => "SOME INDUSTRY",
      :company => company
    )
    job.valid?
    expect(job.errors[:title]).to include("can't be blank")
  end
  it "is not valid with a duplicate title in the same company" do
    company = Company.create(
      :name => "Name",
      :description => "Description",
      :location => "Waterloo, Ontario"
    )
    job = Job.create(
      :title => "TITLE",
      :industry => "SOME INDUSTRY",
      :company => company
    )
    duplicate = Job.new(
      :title => "TITLE",
      :industry => "OTHER INDUSTRY",
      :company => company
    )
    duplicate.valid?
    expect(duplicate.errors[:title]).to include("has already been taken")
  end
  it "is valid for same titles in different companies" do
    company = Company.create(
      :name => "Name",
      :description => "Description",
      :location => "Waterloo, Ontario"
    )
    other_company = Company.create(
      :name => "Other",
      :description => "Description",
      :location => "Waterloo, Ontario"
    )
    job = Job.create(
      :title => "TITLE",
      :industry => "SOME INDUSTRY",
      :company => company
    )
    other_job = Job.new(
      :title => "TITLE",
      :industry => "OTHER INDUSTRY",
      :company => other_company
    )
    expect(other_job).to be_valid
  end
  # Instance Methods
  # Class Methods
end
