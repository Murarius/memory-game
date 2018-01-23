require 'rails_helper'

RSpec.describe 'Games API', type: :request do
  describe 'POST /games' do
    let(:valid_attributes) { { game: { height: 4, width: 4, difficulty: 2 } } }

    context 'when the request is valid' do
      before { post '/games', params: valid_attributes }

      it 'creates a game' do
        expect(Game.all.length).to eq(1)
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the request is invalid' do
      before { post '/games', params: { game: { width: 1 } } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'fails to create game' do
        expect(Game.all.length).to eq(0)
      end
    end
  end

  describe 'DESTROY /games' do
    before do
      Game.create(width: 4, height: 4, difficulty: 2)
      game_code = Game.first.code

      delete '/games/', params: { code: game_code }
    end

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end

    it 'fails when code invalid returns status code 404' do
      delete '/games/', params: { code: 'invalid' }
      expect(response).to have_http_status(404)
    end

    it 'deletes game' do
      expect(response).to have_http_status(204)
      expect(Game.all.length).to eq(0)
    end
  end
end
