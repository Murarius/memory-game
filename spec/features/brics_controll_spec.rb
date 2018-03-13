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
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 1)
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 2)
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 2)
        end

        scenario 'selection resets after 3000 ms' do
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 1)
          sleep 3
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 2)
          sleep 3
          expect(page).to have_css('.brick.open', count: 0)
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
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 1)
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 2)
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 3)
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 3)
        end

        scenario 'selection resets after 3000 ms' do
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 1)
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 2)
          sleep 3
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 3)
          sleep 3
          expect(page).to have_css('.brick.open', count: 0)
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

    context 'difficulty 2' do
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
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 1)
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 2)
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 2)
        end

        scenario 'selection resets after 3000 ms' do
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 1)
          sleep 3
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 2)
          sleep 3
          expect(page).to have_css('.brick.open', count: 0)
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
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 1)
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 2)
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 3)
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 3)
        end

        scenario 'selection resets after 3000 ms' do
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 1)
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 2)
          sleep 3
          first(:css, '.brick.close').click
          expect(page).to have_css('.brick.open', count: 3)
          sleep 3
          expect(page).to have_css('.brick.open', count: 0)
        end
      end
    end
  end
end
