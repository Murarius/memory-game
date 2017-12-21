class AddColumnsToGame < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :width, :integer
    add_column :games, :height, :integer
    add_column :games, :dificulty, :integer
    add_column :games, :ended_at, :timestamp
    add_column :games, :score, :integer, default: 0
    add_column :games, :meta, :text
  end
end
