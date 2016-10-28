require 'rails_helper'

describe Company do
  # Success Tests
  it "is valid with a name, description, location" do
    company = Company.new(
      :name => "Name",
      :description => "Description",
      :location => "Waterloo, Ontario"
    )
    expect(company).to be_valid
  end

  it "is valid with a name, description, location, url" do
    company = Company.new(
      :name => "Name",
      :description => "Description",
      :url => "www.google.com",
      :location => "Waterloo, Ontario"
    )
    expect(company).to be_valid
  end
  # Validation Tests
  it "is not valid without a name" do
    company = Company.new(
      :name => nil,
      :description => "Description",
      :url => "www.google.com",
      :location => "Waterloo, Ontario"
    )
    company.valid?
    expect(company.errors[:name]).to include("can't be blank")
  end
  it "is not valid without a description" do
    company = Company.new(
      :name => "Name",
      :description => nil,
      :url => "www.google.com",
      :location => "Waterloo, Ontario"
    )
    company.valid?
    expect(company.errors[:description]).to include("can't be blank")
  end
  it "is not valid without a location" do
    company = Company.new(
      :name => "Name",
      :description => "Description",
      :url => "www.google.com",
      :location => nil
    )
    company.valid?
    expect(company.errors[:location]).to include("can't be blank")
  end
  it "is not valid with a duplicate name" do
    company = Company.create(
      :name => "Name",
      :description => "Description",
      :location => "Waterloo, Ontario"
    )
    duplicate = Company.new(
      :name => "Name",
      :description => "Other Description",
      :url => "www.google.com",
      :location => "Toronto, Ontario"
    )
    duplicate.valid?
    expect(duplicate.errors[:name]).to include("has already been taken")
  end
  # Instance Methods
  # Class Methods
end
