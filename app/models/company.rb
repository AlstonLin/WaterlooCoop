class Company < ApplicationRecord
  hasMany :jobs, :class_name => "Job"
end
