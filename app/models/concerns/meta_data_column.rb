module MetaDataColumn
  extend ActiveSupport::Concern

  included do
    serialize :meta, Hash
    before_save :parse_meta
  end

  def parse_meta
    self.meta = meta_was.deep_merge(meta).reject { |_k, v| v.blank? }
    self.meta = meta.deep_symbolize_keys
  end

  # Updating meta field (single)
  #
  # @param [Symbol] key Meta key
  # @param [Object] value Meta value
  # @return [Void]
  def update_meta(key, value)
    meta[key] = value
    save
  end
end
