"""create packages table

Revision ID: e7191305c036
Revises: f9e25c3073c2
Create Date: 2023-10-23 13:39:17.371796

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e7191305c036'
down_revision = 'f9e25c3073c2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('albums', schema=None) as batch_op:
        batch_op.add_column(sa.Column('song_id', sa.Integer(), nullable=False))
        batch_op.alter_column('artist_id',
               existing_type=sa.INTEGER(),
               nullable=False)
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=False)
        batch_op.create_foreign_key(None, 'songs', ['song_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('albums', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.alter_column('user_id',
               existing_type=sa.INTEGER(),
               nullable=True)
        batch_op.alter_column('artist_id',
               existing_type=sa.INTEGER(),
               nullable=True)
        batch_op.drop_column('song_id')

    # ### end Alembic commands ###
