require 'rails_helper'

RSpec.feature 'BricsControll', type: :feature, js: true do
  context 'first game' do
    before do
      visit '/'
    end

    context 'difficulty 2' do
      context 'game closed' do
        scenario 'all brics are closed' do
          expect(page).to have_css('.brick.open', count: 0)
        end

        scenario "user can't open brick" do
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 0)
        end
      end

      context 'game opened' do
        before do
          find(:css, '.start-btn').click
        end

        scenario 'all brics are closed' do
          expect(page).to have_css('.brick.open', count: 0)
        end

        scenario 'brick open after click' do
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 1)
        end

        scenario 'brics wont open if difficulty meet' do
          check_difficulty(2)
        end

        scenario 'selection resets after 3000 ms' do
          check_auto_reset(2)
        end
      end
    end

    context 'difficulty 3' do
      before do
        find(:css, ".game-controlls a[name='difficulty'] .fa-caret-up").click
      end

      context 'game closed' do
        scenario 'all brics are closed' do
          expect(page).to have_css('.brick.open', count: 0)
        end

        scenario 'user cant open brick' do
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 0)
        end
      end

      context 'game opened' do
        before do
          find(:css, '.start-btn').click
        end

        scenario 'all brics are closed' do
          expect(page).to have_css('.brick.open', count: 0)
        end

        scenario 'brick open after click' do
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 1)
        end

        scenario 'brics wont open if difficulty meet' do
          check_difficulty(3)
        end

        scenario 'selection resets after 3000 ms' do
          check_auto_reset(3)
        end
      end
    end
  end

  context 'second game' do
    before do
      visit '/'
      find(:css, '.start-btn').click
      first(:css, '.brick.close').click
      first(:css, '.brick.close').click
      first(:css, '.brick.close').click
      find(:css, '.start-btn').click
    end

    context 'difficulty 3' do
      before do
        find(:css, ".game-controlls a[name='difficulty'] .fa-caret-up").click
      end

      context 'game opened' do
        before do
          find(:css, '.start-btn').click
        end

        scenario 'brics wont open if difficulty meet' do
          check_difficulty(3)
        end

        scenario 'selection resets after 3000 ms' do
          check_auto_reset(3)
        end
      end
    end
  end

  def check_difficulty(difficulty)
    difficulty.times do |i|
      first(:css, '.brick.close').click
      expect(page).to have_css('.brick.open', count: i + 1)
    end

    first(:css, '.brick.close').click
    expect(page).to have_css('.brick.open', count: difficulty)
  end

  def check_auto_reset(difficulty)
    (difficulty - 1).times do |i|
      first(:css, '.brick.close').click
      expect(page).to have_css('.brick.open', count: i + 1)
    end

    sleep 3
    first(:css, '.brick.close').click
    expect(page).to have_css('.brick.open', count: difficulty)

    sleep 3
    expect(page).to have_css('.brick.open', count: 0)
  end
end
