"""des

Revision ID: d583cc5b1345
Revises: f8ad5f6816e2
Create Date: 2023-10-25 11:50:08.011480

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd583cc5b1345'
down_revision = 'f8ad5f6816e2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('playlists', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', sa.String(), nullable=True))
        batch_op.drop_column('desciption')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('playlists', schema=None) as batch_op:
        batch_op.add_column(sa.Column('desciption', sa.VARCHAR(), nullable=True))
        batch_op.drop_column('description')

    # ### end Alembic commands ###
