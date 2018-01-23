class GamesController < ActionController::API
  def create
    game = Game.create game_params
    render json: { code: game.code }
  end

  def show

  end

  def destroy
    game = Game.find_by_code params[:code]
    game.destroy

    head :ok
  end

  private

  def game_params
    params.require(:game).permit(:width, :height, :difficulty)
  end
end
