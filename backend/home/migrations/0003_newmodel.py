# Generated by Django 2.2.17 on 2021-01-27 19:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='NewModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_field', models.BigIntegerField()),
                ('one_to_one', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='newmodel_one_to_one', to='home.CustomText')),
            ],
        ),
    ]
