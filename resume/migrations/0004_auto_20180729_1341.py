# Generated by Django 2.0.7 on 2018-07-29 17:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('resume', '0003_experience_logo_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='experience',
            name='languages',
            field=models.CharField(default='', max_length=75),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='experience',
            name='experience_type',
            field=models.CharField(choices=[('e', 'Education'), ('w', 'Work'), ('l', 'Leadership')], max_length=1),
        ),
    ]
