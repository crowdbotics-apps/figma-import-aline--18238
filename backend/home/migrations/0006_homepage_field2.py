# Generated by Django 2.2.17 on 2021-01-28 15:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0005_newmodel"),
    ]

    operations = [
        migrations.AddField(
            model_name="homepage",
            name="field2",
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]
