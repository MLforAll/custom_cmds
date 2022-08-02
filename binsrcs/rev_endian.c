#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <err.h>

int
main(int ac, const char **av)
{
	char		*ns;
	const char	*s;
	size_t		len;

	if (ac < 2)
	{
		(void) fprintf(stderr, "usage: %s string", *av);
		exit(EXIT_FAILURE);
	}
	len = strlen((s = av[1]));
	if (len % 2)
		errx(EXIT_FAILURE, "%s", "only works with len % 2");
	ns = (char *)malloc(sizeof(char) * (len + 1));
	if (!ns)
		errx(EXIT_FAILURE, "malloc failed");
	ns[len] = '\0';
	for (unsigned long idx = 0; len; idx += 2)
	{
		ns[idx + 1] = s[--len];
		ns[idx] = s[--len];
	}
	(void) puts(ns);
	free(ns);
	return EXIT_SUCCESS;
}
