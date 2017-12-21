class Game < ApplicationRecord
  include ::MetaDataColumn

  DEFAULTS = {
    width: 6,
    height: 3,
    difficulty: 2
  }.freeze

  MAX_PARAMS = {
    width: 16,
    height: 8,
    difficulty: 4
  }.freeze

  validates :width,
            presence: true,
            numericality: { greater_than_or_equal_to: 2,
                            less_than_or_equal_to: MAX_PARAMS[:width] }
  validates :height,
            presence: true,
            numericality: { greater_than_or_equal_to: 2,
                            less_than_or_equal_to: MAX_PARAMS[:height] }
  validates :difficulty,
            presence: true,
            numericality: { greater_than_or_equal_to: 2,
                            less_than_or_equal_to: MAX_PARAMS[:difficulty] }
end
