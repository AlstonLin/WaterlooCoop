class Review < ApplicationRecord
  VALID_TERMS = ["1A", "1B", "2A", "2B", "3A", "3B", "4A", "4B", "4B+"]

  belongs_to :job, :class_name => "Job"
  belongs_to :author, :class_name => "User"
  # Relationship validations
  validates :job, :presence => true
  validates :author, :presence => true
  # Rating validations
  validates :rating, :presence => true, :inclusion => 1..4
  validates :difficulty, :presence => true, :inclusion => 1..4
  # Validates term is valid
  validates :term, :presence => true, :inclusion => { :in => VALID_TERMS}
  # Other not-null validations
  validates :salary, :presence => true
  validates :content, :presence => true
  validates :year, :presence => true
end
