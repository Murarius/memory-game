class Game < ApplicationRecord
  include ::MetaDataColumn

  before_validation :generate_code, on: :create

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

  validates :code,
            presence: true,
            length: { is: 20 },
            uniqueness: true

  def generate_code
    new_code = Array.new(20).map { rand(10) }.join

    while Game.find_by_code(new_code).present?
      new_code = Array.new(20).map { rand(10) }.join
    end

    self.code = new_code
  end
end
