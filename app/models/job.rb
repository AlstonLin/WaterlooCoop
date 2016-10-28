class Job < ApplicationRecord
  # Associations  
  has_many :skills, :class_name => "Skill"
  has_many :reviews, :class_name => "Review"
  belongs_to :company, :class_name => "Company"
  # Validations
  validates :title, :presence => true
  validates :industry, :presence => true
  validates :company, :presence => true
  validate :unique_title_in_company
  # Search
  searchkick

  # Custom Validations
  private
  def unique_title_in_company
    if self.class.exists?(:company_id => company_id, :title => title)
      errors.add :title, "has already been taken"
    end
  end
end
