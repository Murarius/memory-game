class AddCodeToGame < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :code, :string, limit: 20, null: false, default: 0
    change_column :games, :code, :string, default: nil
    add_index :games, :code, unique: true
  end
end
