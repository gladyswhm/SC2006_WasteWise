# Generated by Django 4.2.16 on 2024-10-17 11:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rating', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ratings',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('collectorID', models.IntegerField()),
                ('rating', models.IntegerField()),
                ('comments', models.TextField()),
                ('userID', models.IntegerField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Rating',
        ),
        migrations.AlterField(
            model_name='total_rating',
            name='ratings',
            field=models.ManyToManyField(to='rating.ratings'),
        ),
    ]
