/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
const mapDBToModel = ({
  id,
  name,
  year,
  created_at,
  updated_at,
}) => ({
  id,
  name,
  year,
  createdAt: created_at,
  updatedAt: updated_at,
});

const mapDBDetailSongToModel = ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  year,
  genre,
  performer,
  duration,
  albumId,
  createdAt: created_at,
  updatedAt: updated_at,
});

const mapDBSongToModel = ({
  id,
  title,
  performer,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  performer,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToModel, mapDBDetailSongToModel, mapDBSongToModel };
