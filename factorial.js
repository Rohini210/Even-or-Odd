function facto(number)
{
	if(number<=1)
	{
		return 1;
	}
	else
	{
		return number * facto(number - 1);
	}
}