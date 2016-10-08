class Review < ApplicationRecord
  hasOne :job, :class_name => "Job"
  hasOne :author, :class_name => "User"
end
