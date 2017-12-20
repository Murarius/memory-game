class Game < ApplicationRecord
  DEFAULTS = {
    width: 6,
    height: 3,
    difficulty: 2
  }.freeze
end
