class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.boolean :premium, :default => false
      t.string :name
      t.string :image
      # Devise
      t.string :email, null: false, default: "", index: true, unique: true
      t.string :encrypted_password, null: false, default: ""
      t.datetime :remember_created_at
      t.datetime :remember_created_at
      t.integer :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.string :current_sign_in_ip
      t.string :last_sign_in_ip
      # Omniauth
      t.string :provider
      t.string :uid
      # Timestamps
      t.timestamps
    end
  end
end
