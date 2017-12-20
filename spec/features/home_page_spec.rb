require 'rails_helper'

RSpec.feature 'HomePage', type: :feature do
  scenario 'has header and footer' do
    visit '/'
    expect(page).to have_text('Simple Memory Game')
    expect(page).to have_text('Created by')
  end
end
