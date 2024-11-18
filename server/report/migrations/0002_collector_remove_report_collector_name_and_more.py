# Generated by Django 5.1.2 on 2024-10-18 03:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("report", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Collector",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("email", models.EmailField(max_length=254)),
            ],
        ),
        migrations.RemoveField(
            model_name="report",
            name="collector_name",
        ),
        migrations.RemoveField(
            model_name="report",
            name="user",
        ),
        migrations.AddField(
            model_name="report",
            name="collector_id",
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="report",
            name="userID",
            field=models.IntegerField(default=2),
            preserve_default=False,
        ),
    ]
