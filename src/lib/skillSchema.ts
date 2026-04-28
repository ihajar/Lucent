import { Tags } from "lucide-react";
import { z } from "zod";

export const skillSchema = z.object({
	title: z
		.string()
		.min(3, "Title must be at least 3 characters")
		.max(80, "Title too long"),
	description: z
		.string()
		.min(20, "Description must be at least 20 characters")
		.max(300, "Description too long"),
	Tags: z
		.string()
		.min(1, "Add at least one tag")
		.transform((val) =>
			val
				.split(",")
				.map((t) => t.trim())
				.filter(Boolean),
		),
	installCommand: z.string().min(1, "Install command is required"),
	promptConfig: z
		.string()
		.min(10, "USage example must be at least 10 characters."),
	usageExample: z
		.string()
		.min(10, "USage example must be at least 10 characters."),
});

export type skillSchemaValues = z.infer<typeof skillSchema>;
