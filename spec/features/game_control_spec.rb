require 'rails_helper'

RSpec.feature 'GameControll', type: :feature, js: true do
  scenario 'has controls and initial bricks' do
    visit '/'

    expect(page).to have_text('Width:')
    expect(page).to have_text('Height:')
    expect(page).to have_text('Difficulty:')

    initial_bricks = Game::DEFAULTS[:width] * Game::DEFAULTS[:height]
    expect(page).to have_css('.brick', count: initial_bricks)
  end

  scenario 'width controls work' do
    visit '/'

    initial_width = Game::DEFAULTS[:width]
    initial_height = Game::DEFAULTS[:height]

    find(:css, ".game-controlls a[name='width'] .fa-caret-up").click
    bricks_count = initial_height * (initial_width + 1)
    expect(page).to have_css('.brick', count: bricks_count)

    find(:css, ".game-controlls a[name='width'] .fa-caret-down").click
    find(:css, ".game-controlls a[name='width'] .fa-caret-down").click
    bricks_count = initial_height * (initial_width - 1)
    expect(page).to have_css('.brick', count: bricks_count)
  end

  scenario 'height controls work' do
    visit '/'

    initial_width = Game::DEFAULTS[:width]
    initial_height = Game::DEFAULTS[:height]

    find(:css, ".game-controlls a[name='height'] .fa-caret-up").click
    bricks_count = (initial_height + 1) * initial_width
    expect(page).to have_css('.brick', count: bricks_count)

    find(:css, ".game-controlls a[name='height'] .fa-caret-down").click
    find(:css, ".game-controlls a[name='height'] .fa-caret-down").click
    bricks_count = (initial_height - 1) * initial_width
    expect(page).to have_css('.brick', count: bricks_count)
  end
end
